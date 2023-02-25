var { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const getAllDrivers = async () => {
  const { data, error } = await supabase.from("driverRatings").select("*");
  if (error) {
    return error;
  }
  console.log(data);
  return data;
};

module.exports = {
  supabase,
  getAllDrivers,
};
