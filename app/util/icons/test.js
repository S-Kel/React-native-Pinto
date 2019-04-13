<View style={styles.PinHeader}>
  <View style={styles.PinUtitlityNav}>
    <Back />
    <Heart />
    <Share />
    <More />
  </View>

  <View style={styles.PinButtonContainer}>
    <View style={styles.PinButton}>
      <PinIcon />
      <View style={styles.PinIcon} />
      <Text style={styles.PinButtonText}> Save</Text>
    </View>
  </View>
</View>

  <View style={styles.PinContent}>
    <Text style={styles.ImagePlaceholder}>Image coming soon...</Text>
  </View>

  <View style={styles.PinMeta}>
    <View style={styles.PinMetaContainer}>
      <Text style={styles.PinMetaText}>Save from</Text>
      <Text style={styles.PinMetaText}>website.com</Text>
    </View>

    <View style={styles.PinButton}>
      <Text style={styles.PinButtonText}> Visit</Text>
    </View>
  </View>

  <View style={styles.PinUser}>
    <View style={styles.PinUserAvatar}>
      <Text> Placeholder</Text>
    </View>
    <View style={styles.PinUserContainer}>
      <Text style={styles.PinUserText}>
        <Text style={styles.TextBold}>User Name</Text>
        saved to
              <Text style={styles.TextBold}>Space</Text>
      </Text>
      <Text style={styles.PinUserText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus officiis eligendi magnam asperiores quidem, quis
        unde! Autem vel doloribus atque error modi, placeat et
        quisquam animi ad, eveniet, est asperiores?
      </Text>
    </View>
  </View>