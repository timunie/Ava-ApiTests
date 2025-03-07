# ToRect(Double) Method


Converts the <a href="T_Avalonia_PixelRect">PixelRect</a> to a device-independent <a href="T_Avalonia_Rect">Rect</a> using the specified scaling factor.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Rect ToRect(
	double scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToRect ( 
	scale As Double
) As Rect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ToRect : 
        scale : float -> Rect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelRect.cs#L348" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The scaling factor.</dd></dl>

#### Return Value
<a href="T_Avalonia_Rect">Rect</a>  
The device-independent rect.

## See Also


#### Reference
<a href="T_Avalonia_PixelRect">PixelRect Structure</a>  
<a href="Overload_Avalonia_PixelRect_ToRect">ToRect Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
