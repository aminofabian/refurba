
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Category } from "@/payload-types";


export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {    
        const data = await ctx.db.find({
          collection: 'categories',
          depth: 2,
          pagination: false,
          where: {
            parent: {
              exists: false,
            },
          },
          sort: 'name'
        });
    
        const formattedData = data.docs.map((doc) => ({
            ...doc,
            subcategories: (doc.subcategories?.docs?.filter((subcategory): subcategory is Category => 
                typeof subcategory !== 'number'
            ) ?? []) as Category[]
        }));
                

        return formattedData;
    }),
});
