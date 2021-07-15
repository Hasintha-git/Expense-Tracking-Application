
            <View style={styles.incomeCard}>
      
            <Image
            source={require('../assets/category/bill.png')}
            resizeMode="contain"
            style={{
                width:30,
                height:30,
                tintColor:'blue',
                left:20,
            }}
            />
  <Text style={styles.oldincomeTxt}>{this.state.total}</Text>
  </View>