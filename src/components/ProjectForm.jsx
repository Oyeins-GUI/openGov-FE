import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { callCreateProposal } from "../utils/ContractCall";

export default function ProjectForm() {
   const form = useForm({
      defaultValues: {
         title: "",
         goal: "",
         neededFund: "",
         projectDocLink: "",
         githubLink: "",
         description: "",
      },
   });
   const { register, handleSubmit, formState } = form;
   const { errors } = formState;
   const onSubmit = (data) => {
      const {
         title,
         niche,
         description,
         neededFund,
         projectDocLink,
         githubLink,
      } = data;
      callCreateProposal(
         title,
         niche,
         description,
         neededFund,
         projectDocLink,
         githubLink
      );
   };

   return (
      <>
         <div
            style={{
               marginTop: "20px",
               textAlign: "center",
            }}
         >
            <form
               noValidate
               onSubmit={handleSubmit(onSubmit)}
               autoComplete="false"
               style={{
                  margin: "auto",
                  width: "100%",
                  maxWidth: "600px",
               }}
            >
               <Stack spacing={3} style={{ paddingInline: "10px" }}>
                  <TextField
                     label="Project Name"
                     type="text"
                     placeholder="Enter project name"
                     {...register("title", {
                        required: "Project name is required",
                     })}
                     error={!!errors.title}
                     helperText={errors.title?.message}
                  />
                  <TextField
                     label="Project Goal"
                     type="text"
                     placeholder="Enter project goal"
                     {...register("goal", {
                        required: "Project goal is required",
                     })}
                     error={!!errors.niche}
                     helperText={errors.niche?.message}
                  />
                  <TextField
                     label="Fund needed for project"
                     type="number"
                     placeholder="Enter an amount"
                     {...register("neededFund", {
                        required: "Needed fund is required",
                     })}
                     error={!!errors.niche}
                     helperText={errors.niche?.message}
                  />
                  <TextField
                     label="Project Documentation"
                     type="text"
                     placeholder="Enter link to project description"
                     {...register("projectDocLink", {
                        required: "Documentation link is required",
                     })}
                     error={!!errors.niche}
                     helperText={errors.niche?.message}
                  />
                  <TextField
                     label="Github Link"
                     type="text"
                     placeholder="Enter github link"
                     {...register("githubLink", {
                        required: "Github link is required",
                     })}
                     error={!!errors.niche}
                     helperText={errors.niche?.message}
                  />
                  <TextField
                     label="Project Description"
                     type="text"
                     placeholder="An insight about the project"
                     multiline
                     maxRows={10}
                     {...register("description", {
                        required: "Description is required",
                     })}
                     error={!!errors.description}
                     helperText={errors.description?.message}
                  />
                  <Button type="submit" variant="contained">
                     Create
                  </Button>
               </Stack>
            </form>
         </div>
      </>
   );
}
