import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TextConverter Property


Gets or sets the custom bidirectional Text-Value converter. Non-null converter overrides <a href="P_Avalonia_Controls_NumericUpDown_ParsingNumberStyle">ParsingNumberStyle</a>, providing finer control over string representation of the underlying value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IValueConverter? TextConverter { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property TextConverter As IValueConverter
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TextConverter : IValueConverter with get, set
```
</TabItem>
</Tabs>



#### Property Value
IValueConverter

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
