import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { connect } from "react-redux";

const mapStateToProps = ({ category }) => ({
  isEdit: category.isEdit,
});

class HeaderRightBtn extends React.Component {

  render() {
    const { onSubmit, isEdit } = this.props;
    return (
      <HeaderButtons>
        <Item title={isEdit ? "完成" : "编辑"} onPress={onSubmit} />
      </HeaderButtons>
    );
  }

}

export default connect(mapStateToProps)(HeaderRightBtn);
