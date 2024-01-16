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
                    from: `onboarding@resend.dev`,
                    to: ['tarunkoteeswaran@gmail.com', 'paolosait7@gmail.com'],
                    subject: `Dev Request: ${name}`,
                    html: `<div> From ${email}</div>
                <div>${message}</div>`
                });
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    }


}