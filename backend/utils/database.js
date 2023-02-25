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

const getDriverDeliveries = async (driver_id, startDate, endDate) => {
  const { data, error } = await supabase
    .from("driverRatings")
    .select("*")
    .eq("driver_id", driver_id);
  // .lt('rated_at', endDate)
  // .gt('rated_at', startDate);
  if (error) {
    return error;
  }
  return data;
};

const getStationOrders = async (stationid, endDate) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("station_id", stationid)
    .lt('date_of_delivery', endDate)
    .order('date_of_delivery', { ascending: true });

  if (error) {
    return error;
  }
  return data;
};

const getAttendance = async (stationid, date) => {
  const { data, error } = await supabase
    .from("drivers")
    .select("*")
    .eq("station_id", stationid)
    .eq('stationed_date', date);

  if (error) {
    return error;
  }
  return data;
};

const getOrders = async (stationid, date) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("station_id", stationid)
    .eq('date_of_delivery', date);

  if (error) {
    return error;
  }
  return data;
}

module.exports = {
  supabase,
  getAllDrivers,
  getDriverDeliveries,
  getStationOrders,
  getAttendance,
  getOrders,
};
