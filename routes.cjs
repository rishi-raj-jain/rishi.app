import { Router } from '@edgio/core/router';

const router = new Router();

router.static('.vercel/output/static');

router.fallback(({ renderWithApp }) => {
	renderWithApp();
});

export default router;
