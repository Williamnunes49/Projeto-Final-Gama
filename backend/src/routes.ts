import express from "express";
import ProfissionalController from "./controllers/ProfissionalController";
const router = express.Router();

// Start of Routes Cliente
// End of Routes Cliente

// Inicio de rotas Profissionais
router.get("/profissionais", ProfissionalController.allProfissionais);
router.get("/profissionais/:id", ProfissionalController.getOneProfissional);
router.post("/profissionais", ProfissionalController.createProfissional);
router.put("/profissionais/:id", ProfissionalController.updateOneProfissional);
router.delete(
  "/profissionais/:id",
  ProfissionalController.deleteOneProfissional
);
// Fim de rotas Profissionais

// Inicio de rotas Serviços
// Fim de rotas Serviços

// Inicio de rotas ProfisionalServiço
// Inicio de rotas ProfissionalServiço

export default router;
