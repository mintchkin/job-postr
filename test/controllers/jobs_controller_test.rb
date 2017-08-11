require 'test_helper'

class JobsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "should get jobs index" do
    get jobs_url
    assert_response :success
  end

  test "should get new job" do
    get new_job_url
    assert_response :success
  end
end
