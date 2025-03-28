# ParseHexString Method


Parses a hex color value string into a new <a href="T_Avalonia_Media_Color">Color</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Color? ParseHexString(
	string hexColor,
	AlphaComponentPosition alphaPosition
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ParseHexString ( 
	hexColor As String,
	alphaPosition As AlphaComponentPosition
) As Color?
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ParseHexString : 
        hexColor : string * 
        alphaPosition : AlphaComponentPosition -> Nullable<Color> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/Converters/ColorToHexConverter.cs#L134" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The hex color string to parse.</dd><dt>  <a href="T_Avalonia_Controls_AlphaComponentPosition">AlphaComponentPosition</a></dt><dd>The input position of the alpha component.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Media_Color">Color</a>)  
The parsed <a href="T_Avalonia_Media_Color">Color</a>; otherwise, null.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_ColorToHexConverter">ColorToHexConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  

