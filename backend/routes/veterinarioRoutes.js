import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    confirmar, 
    autenticar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword 
} from '../controllers/veterinarioControllers.js';
import checkAuth from '../middleware/authMiddleware.js';

// área publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar)
router.post("/login", autenticar)
router.post("/olvide-password", olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)

// área privada 
router.get("/perfil",checkAuth, perfil);

export default router;