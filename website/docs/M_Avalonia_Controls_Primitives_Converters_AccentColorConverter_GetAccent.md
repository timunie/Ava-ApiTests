# GetAccent Method


This does not account for perceptual differences and also does not match with system accent color calculation.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_Converters">Avalonia.Controls.Primitives.Converters</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static HsvColor GetAccent(
	HsvColor hsvColor,
	int accentStep
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetAccent ( 
	hsvColor As HsvColor,
	accentStep As Integer
) As HsvColor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetAccent : 
        hsvColor : HsvColor * 
        accentStep : int -> HsvColor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/Converters/AccentColorConverter.cs#L103" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_HsvColor">HsvColor</a></dt><dd>The base color to calculate the accent from.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of accent color steps to move.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_HsvColor">HsvColor</a>  
The new accent color.Use the HSV representation as it's more perceptual. In most cases only the value is changed by a fixed percentage so the algorithm is reproducible.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_Converters_AccentColorConverter">AccentColorConverter Class</a>  
<a href="N_Avalonia_Controls_Primitives_Converters">Avalonia.Controls.Primitives.Converters Namespace</a>  
