"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("./sequelize")); // Importa la instancia de Sequelize que configuraste
const Appointment_1 = __importDefault(require("./models/Appointment")); // Importa tus modelos
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const Professional_1 = __importDefault(require("./models/Professional"));
const Patient_1 = __importDefault(require("./models/Patient"));
const Receptionist_1 = __importDefault(require("./models/Receptionist"));
const HealthInsurance_1 = __importDefault(require("./models/HealthInsurance"));
const InsurancePlan_1 = __importDefault(require("./models/InsurancePlan"));
const LogIn_1 = __importDefault(require("./models/LogIn"));
const Role_1 = __importDefault(require("./models/Role"));
dotenv_1.default.config(); // Carga las variables de entorno de un archivo .env si lo deseas
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === 'development';
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // Configura CORS si es necesario
(async () => {
    try {
        await sequelize_1.default.authenticate();
        console.log('Conexión a la base de datos establecida.');
        // Sincroniza tus modelos con la base de datos
        const models = [
            Role_1.default,
            HealthInsurance_1.default,
            InsurancePlan_1.default,
            Professional_1.default,
            Patient_1.default,
            Receptionist_1.default,
            LogIn_1.default,
            Appointment_1.default,
        ];
        for (const model of models) {
            await model.sync({ force: isDev });
        }
    }
    catch (error) {
        console.error('Error en auth al conectar con la base de datos:', { error });
    }
})();
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}).on('error', (err) => {
    console.error('Error al iniciar el servidor:', { err });
});
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Hubo un error en el servidor.');
});
