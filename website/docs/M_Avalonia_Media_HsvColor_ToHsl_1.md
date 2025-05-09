# ToHsl(Double, Double, Double, Double) Method


Converts the given HSVA color component values to their HSL color equivalent.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static HslColor ToHsl(
	double hue,
	double saturation,
	double value,
	double alpha = 1
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ToHsl ( 
	hue As Double,
	saturation As Double,
	value As Double,
	Optional alpha As Double = 1
) As HslColor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ToHsl : 
        hue : float * 
        saturation : float * 
        value : float * 
        ?alpha : float 
(* Defaults:
        let _alpha = defaultArg alpha 1
*)
-> HslColor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/HsvColor.cs#L546" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Hue component in the HSV color model in the range from 0..360.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Saturation component in the HSV color model in the range from 0..1.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The Value component in the HSV color model in the range from 0..1.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The Alpha component in the range from 0..1.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_HslColor">HslColor</a>  
A new <a href="T_Avalonia_Media_HslColor">HslColor</a> equivalent to the given HSVA values.

## See Also


#### Reference
<a href="T_Avalonia_Media_HsvColor">HsvColor Structure</a>  
<a href="Overload_Avalonia_Media_HsvColor_ToHsl">ToHsl Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

