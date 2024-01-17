import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const message = data.get('message') as string;
        const name = data.get('name') as string;
        const checked = data.get('checkbox') as string;
        const resend = new Resend(RESEND_API_KEY);
        if (checked == 'on') {
            try {
                const data = await resend.emails.send({
                    from: `2V3.studio <msg@2v3.studio>`,
                    to: ['tarunkoteeswaran@gmail.com', 'paolosait7@gmail.com'],
                    subject: `Message from ${name}`,
                    html: `<h2>One new message from ${name}</h2><p>"${message}"</p>
                    <p>Email to reply to: ${email}</p>
                `
                });
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    }
}