<script>
  AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
      to: {default: '2.5 2.5 2.5', type: 'vec3'}
    },

    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        this.el.object3D.scale.copy(data.to);
      });
    }
  });
</script>
