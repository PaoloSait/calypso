import { db } from "$lib/firebase";
import { addDoc, collection } from "@firebase/firestore";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        console.log("Tarun");
        const data = await request.formData();
        const email = data.get('email') as string;
        try {
            await addDoc(collection(db, "emails"), {
                email: email,
            });
            return {success: true}
        } catch (error) {
            console.error(error);
        }
    },
}