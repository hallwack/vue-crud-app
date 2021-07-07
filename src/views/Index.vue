<template>
    <div class="container my-3">
        <div class="row justify-content-center">
            <div class="col-10">
                <router-link
                    :to="{ name: 'create' }"
                    class="btn btn-primary rounded shadow my-3"
                    >Add</router-link
                >

                <div class="card rounded shadow">
                    <div class="card-header">
                        <h3>Products</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped align-middle">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(product, index) in products"
                                    :key="index"
                                >
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.description }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.quantity }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link
                                                :to="{
                                                    name: 'edit',
                                                    params: { id: product.id },
                                                }"
                                                class="btn btn-outline-primary btn-sm"
                                                >Edit</router-link
                                            >
                                            <router-link
                                                :to="{
                                                    name: 'detail',
                                                    params: { id: product.id },
                                                }"
                                                class="btn btn-outline-secondary btn-sm"
                                                >Detail</router-link
                                            >
                                            <button
                                                class="btn btn-outline-danger btn-sm"
                                                @click.prevent="
                                                    destroy(product.id, index)
                                                "
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
    setup() {
        // reaction state
        let products = ref([]);

        onMounted(() => {
            // fetch data from api
            axios
                .get("http://localhost:8080/api/products")
                .then((result) => {
                    products.value = result.data;
                })
                .catch((err) => {
                    console.log(err.response.message);
                });
        });

        function destroy(id, index) {
            axios
                .delete(`http://localhost:8080/api/products/${id}`)
                .then(() => {
                    products.value.splice(index, 1);
                })
                .catch((err) => {
                    console.log(err.response.message);
                });
        }

        return {
            products,
            destroy,
        };
    },
};
</script>

<style></style>
