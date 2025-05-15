import { redirect } from "next/navigation"

// Redirect to the default products page (new)
export default function ProductsPage() {
  redirect("/products/new")
  return null
}
