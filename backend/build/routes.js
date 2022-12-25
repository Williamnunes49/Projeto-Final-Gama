"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// Início Imports Controllers
var ProfissionalController_1 = __importDefault(require("./controllers/ProfissionalController"));
var servicoController_1 = __importDefault(require("./controllers/servicoController"));
var ProfissionalServicoController_1 = __importDefault(require("./controllers/ProfissionalServicoController"));
var clienteController_1 = __importDefault(require("./controllers/clienteController"));
var SenderController_1 = __importDefault(require("./controllers/SenderController"));
var AgendaController_1 = __importDefault(require("./controllers/AgendaController"));
var AdminController_1 = __importDefault(require("./controllers/AdminController"));
// Fim Imports Controllers
// Inicio Imports Validations
var create_1 = __importDefault(require("./validations/profissionais/create"));
var create_2 = __importDefault(require("./validations/clientes/create"));
var create_3 = __importDefault(require("./validations/servicos/create"));
var create_4 = __importDefault(require("./validations/admin/create"));
// Fim Imports Validations
// Inicio de rotas Profissionais
router.get("/profissionais", ProfissionalController_1.default.allProfissionais);
router.get("/profissionais/:id", ProfissionalController_1.default.getOneProfissional);
router.post("/profissionais", create_1.default, ProfissionalController_1.default.createProfissional);
router.put("/profissionais/:id", ProfissionalController_1.default.updateOneProfissional);
router.delete("/profissionais/:id", ProfissionalController_1.default.deleteOneProfissional);
// Fim de rotas Profissionais
// Inicio de rotas Serviços
router.post("/servico", create_3.default, servicoController_1.default.criarServico);
router.get("/servico", servicoController_1.default.listarServico);
router.get("/servico/:id", servicoController_1.default.listarServicoId);
router.put("/servico/:id", servicoController_1.default.atulizarServico);
router.delete("/servico/:id", servicoController_1.default.deletaServico);
// Fim de rotas Serviços
// Inicio de rotas Clientes
router.post("/cliente", create_2.default, clienteController_1.default.criarCliente);
router.get("/cliente", clienteController_1.default.listarClientes);
router.get("/cliente/:id", clienteController_1.default.listarClienteId);
router.put("/cliente/:id", clienteController_1.default.atualizarCliente);
router.delete("/cliente/:id", clienteController_1.default.deletarCliente);
// Fim de rotas Clientes
// Inicio de rotas Admin
router.post("/admin", create_4.default, AdminController_1.default.criarAdmin);
router.get("/admin", AdminController_1.default.admin);
router.put("/admin/:id", AdminController_1.default.atualizarAdmin);
router.delete("/admin/:id", AdminController_1.default.deletarAdmin);
// Inicio de rotas Admin
// Inicio de rotas ProfisionalServiço
router.post("/profissionalservico", ProfissionalServicoController_1.default.criarProfissionalServico);
router.get("/profissionalservico", ProfissionalServicoController_1.default.listarProfissionalServico);
router.get("/profissionalservico/:id", ProfissionalServicoController_1.default.listarProfissionalServicoId);
router.put("/profissionalservico/:id", ProfissionalServicoController_1.default.atualizarProfissionalServico);
router.delete("/profissionalservico/:id", ProfissionalServicoController_1.default.deletaProfissionalServico);
// Fim de rotas ProfissionalServiço
// Inicio de rotas Agenda
router.post('/agenda', AgendaController_1.default.cadastroAgenda);
router.get('/agenda', AgendaController_1.default.allAgenda);
router.get('/agenda/:id', AgendaController_1.default.allAgendaId);
router.put('/agenda/:id', AgendaController_1.default.agendaAtualizada);
router.delete('/agenda/:id', AgendaController_1.default.excluirAgenda);
// Fim de rotas agenda
// Inicio de rotas zap zap
router.post("/send", SenderController_1.default.createText); // Parte caso queiram testar sem ter que criar um cliente
// Fim de rotas zap zap
exports.default = router;
