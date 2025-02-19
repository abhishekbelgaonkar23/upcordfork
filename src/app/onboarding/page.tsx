import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
 
export default async function ServerComponent() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session) {
        return redirect("/")
    }
    return (
        <div>
            <h1>Welcome {JSON.stringify(session)}</h1>
        </div>
    )
}