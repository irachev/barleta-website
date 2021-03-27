<?php
include 'dashboard_template.php';

$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if ($con) {
    echo "";
} else {
    echo "no connection";
}
?>

<html>
<body>
<div class="body-content">

    <div class="add_category">
        <form action="add.php" method="post">
            <div class="form-group">
                <label class="add-category-name">Add Category Name</label>
                <input type="text" name="category_name" class="form-control input-settings">
            </div>


            <div class="form-group">
                <input type="submit" name="action" id="action" value="Add" class="btn btn-info"/>
            </div>
        </form>
    </div>




    <div class="sub_category">
        <form action="add.php" method="post">

            <div class="form-group">
                <label>Add SubCategory</label>
                <input type="text" name="category_name" class="form-control input-settings">
            </div>

            <select class="form-control form-control-category category-main settings-sub-category input-settings"
                    name="parent_id">
                <option value="">Parent Category</option>

                <?php
                $get_categories = "SELECT * FROM categories";
                $run_categories = mysqli_query($con, $get_categories);
                while ($row_categories = mysqli_fetch_array($run_categories)) {

                    $category_id = $row_categories['category_id'];
                    $parent_id = $row_categories['parent_id'];
                    $category_name = $row_categories['category_name'];

                    echo "<option value = '$category_id'>$category_name</option>";
                }
                ?>

            </select>

            <div class="form-group settings-submit-button">
                <input type="submit" name="action" id="action" value="Add" class="btn btn-info"/>
            </div>


        </form>
        <div class="category_tree">
            <?php
            $margin = 0;
            $get_main_categories = "SELECT * FROM categories WHERE parent_id = 0";
            $run_main_categories = mysqli_query($con, $get_main_categories);
            while ($row_main_category = mysqli_fetch_array($run_main_categories)) {
                echo htmlCategory($row_main_category['category_id'], $row_main_category['category_name'], $row_main_category['parent_id']);

                $get_main_categories_without_current = "SELECT * FROM categories WHERE parent_id = 0 AND category_id != " . $row_main_category['category_id'];
                $run_main_categories_without_current = mysqli_query($con, $get_main_categories_without_current);
                $options = '<option value="">Parent Category</option>';
                while ($row_main_category_without_current = mysqli_fetch_array($run_main_categories_without_current)) {
                    $options .= '<option value="' . $row_main_category_without_current['category_id'] . '">' . $row_main_category_without_current['category_name'] . '</option>';
                }
                $get_sub_categories = "SELECT * FROM categories WHERE parent_id = " . $row_main_category['category_id'];
                $run_sub_categories = mysqli_query($con, $get_sub_categories);
                $result = mysqli_num_rows($run_sub_categories);
                if ($result > 0) {
                    while ($row_sub_category = mysqli_fetch_array($run_sub_categories)) {
                        echo htmlCategory($row_sub_category['category_id'], $row_sub_category['category_name'], $row_sub_category['parent_id'], $options);
                    }
                }
            } ?>

            <?php
            function htmlCategory($categoryId, $categoryName, $parentId, $options = null)
            {
                $html = '<div style="display: inline-flex">
                    <h1>' . $categoryName . '</h1>
                    <form action="category_edit.php?id=' . $categoryId . '" method="post" style="float: right; margin-bottom: 0">
                           <div class="form-edit-html" style="display: none">
                                <input type="text" name="category_name" value="' . $categoryName . '"/>
                                <button type="submit" />
                           </div>
                           <i class="fas fa-pencil-alt ml-3 edit-form" style="font-size:25px; margin-top: 15px; cursor: pointer"></i>
                    </form>
                    <form action="category_delete.php?id=' . $categoryId . '" method="post" style="float: right; margin-bottom: 0">
                        <i class="fa fa-trash ml-2 del-submit" style="font-size:25px; margin-top: 15px; cursor: pointer"></i>
                    </form>
                </div></br>';
                if ($options) {
                    $html = '<div style="display: inline-flex">
                        <h4 style="margin-left: 15px" parent-id="' . $parentId . '">*' . $categoryName . '</h4>
                        <form action="category_edit.php?id=' . $categoryId . '" method="post" style="float: right; margin-bottom: 0">
                           <div class="form-edit-html" style="display: none">
                                <input type="text" name="category_name" value="' . $categoryName . '"/>
                                <select class="form-control form-control-category category-main settings-sub-category" name="category_parent_id">
                                    ' . $options . '
                                </select>
                                <button type="submit" />
                           </div>
                           <i class="fas fa-pencil-alt ml-3 edit-form" style="font-size:18px; margin-top: 10px; cursor: pointer"></i>
                        </form>
                        <form action="category_delete.php?id=' . $categoryId . '" method="post" style="float: right; margin-bottom: 0">
                            <i class="fa fa-trash ml-2 del-submit" style="font-size:18px; margin-top: 10px; cursor: pointer"></i>
                        </form>
                    </div></br>';
                }
                return $html;
            }

            ?>

        </div>

    </div>
</div>







</body>
</html>

























