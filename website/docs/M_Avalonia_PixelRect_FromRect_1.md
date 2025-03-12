# FromRect(Rect, Double) Method


Converts a <a href="T_Avalonia_Rect">Rect</a> to device pixels using the specified scaling factor.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelRect FromRect(
	Rect rect,
	double scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromRect ( 
	rect As Rect,
	scale As Double
) As PixelRect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromRect : 
        rect : Rect * 
        scale : float -> PixelRect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelRect.cs#L380" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The scaling factor.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelRect">PixelRect</a>  
The device-independent rect.

## See Also


#### Reference
<a href="T_Avalonia_PixelRect">PixelRect Structure</a>  
<a href="Overload_Avalonia_PixelRect_FromRect">FromRect Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

