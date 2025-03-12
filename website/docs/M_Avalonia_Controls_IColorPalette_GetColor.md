# GetColor Method


Gets a color in the palette by index.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Color GetColor(
	int colorIndex,
	int shadeIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetColor ( 
	colorIndex As Integer,
	shadeIndex As Integer
) As Color
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetColor : 
        colorIndex : int * 
        shadeIndex : int -> Color 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorPalettes/IColorPalette.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the color in the palette. The index must be between zero and <a href="P_Avalonia_Controls_IColorPalette_ColorCount">ColorCount</a>.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the color shade in the palette. The index must be between zero and <a href="P_Avalonia_Controls_IColorPalette_ShadeCount">ShadeCount</a>.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Color">Color</a>  
The color at the specified index or an exception.

## See Also


#### Reference
<a href="T_Avalonia_Controls_IColorPalette">IColorPalette Interface</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

