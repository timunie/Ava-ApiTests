# FromAhsl Method


Creates a new <a href="T_Avalonia_Media_HslColor">HslColor</a> from individual color component values.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static HslColor FromAhsl(
	double a,
	double h,
	double s,
	double l
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromAhsl ( 
	a As Double,
	h As Double,
	s As Double,
	l As Double
) As HslColor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromAhsl : 
        a : float * 
        h : float * 
        s : float * 
        l : float -> HslColor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/HslColor.cs#L341" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Alpha (transparency) component in the range from 0..1.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Hue component in the range from 0..360.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Saturation component in the range from 0..1.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Lightness component in the range from 0..1.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_HslColor">HslColor</a>  
A new <a href="T_Avalonia_Media_HslColor">HslColor</a> built from the individual color component values.

## Remarks
This exists for symmetry with the <a href="T_Avalonia_Media_Color">Color</a> struct; however, the appropriate constructor should commonly be used instead.

## See Also


#### Reference
<a href="T_Avalonia_Media_HslColor">HslColor Structure</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

