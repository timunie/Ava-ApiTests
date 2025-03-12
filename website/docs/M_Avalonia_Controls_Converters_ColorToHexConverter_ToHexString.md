# ToHexString Method


Converts the given color to its hex color value string representation.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static string ToHexString(
	Color color,
	AlphaComponentPosition alphaPosition,
	bool includeAlpha = true,
	bool includeSymbol = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ToHexString ( 
	color As Color,
	alphaPosition As AlphaComponentPosition,
	Optional includeAlpha As Boolean = true,
	Optional includeSymbol As Boolean = false
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ToHexString : 
        color : Color * 
        alphaPosition : AlphaComponentPosition * 
        ?includeAlpha : bool * 
        ?includeSymbol : bool 
(* Defaults:
        let _includeAlpha = defaultArg includeAlpha true
        let _includeSymbol = defaultArg includeSymbol false
*)
-> string 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/Converters/ColorToHexConverter.cs#L94" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd>The color to represent as a hex value string.</dd><dt>  <a href="T_Avalonia_Controls_AlphaComponentPosition">AlphaComponentPosition</a></dt><dd>The output position of the alpha component.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the alpha component will be included in the hex string.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the hex symbol '#' will be added.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The input color converted to its hex value string.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_ColorToHexConverter">ColorToHexConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  

