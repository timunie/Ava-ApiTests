# ToHsv(Double, Double, Double, Double) Method


Converts the given HSLA color component values to their HSV color equivalent.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static HsvColor ToHsv(
	double hue,
	double saturation,
	double lightness,
	double alpha = 1
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ToHsv ( 
	hue As Double,
	saturation As Double,
	lightness As Double,
	Optional alpha As Double = 1
) As HsvColor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ToHsv : 
        hue : float * 
        saturation : float * 
        lightness : float * 
        ?alpha : float 
(* Defaults:
        let _alpha = defaultArg alpha 1
*)
-> HsvColor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/HslColor.cs#L463" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Hue component in the HSL color model in the range from 0..360.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Saturation component in the HSL color model in the range from 0..1.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Lightness component in the HSL color model in the range from 0..1.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The Alpha component in the range from 0..1.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_HsvColor">HsvColor</a>  
A new <a href="T_Avalonia_Media_HsvColor">HsvColor</a> equivalent to the given HSLA values.

## See Also


#### Reference
<a href="T_Avalonia_Media_HslColor">HslColor Structure</a>  
<a href="Overload_Avalonia_Media_HslColor_ToHsv">ToHsv Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
