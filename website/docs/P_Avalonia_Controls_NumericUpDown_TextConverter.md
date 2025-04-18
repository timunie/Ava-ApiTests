# TextConverter Property


Gets or sets the custom bidirectional Text-Value converter. Non-null converter overrides <a href="P_Avalonia_Controls_NumericUpDown_ParsingNumberStyle">ParsingNumberStyle</a>, providing finer control over string representation of the underlying value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/NumericUpDown/NumericUpDown.cs#L281" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

