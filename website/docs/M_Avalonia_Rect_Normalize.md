# Normalize Method


Normalizes the rectangle so both the <a href="P_Avalonia_Rect_Width">Width</a> and <a href="P_Avalonia_Rect_Height">Height</a> are positive, without changing the location of the rectangle



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Rect Normalize()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Normalize As Rect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Normalize : unit -> Rect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rect.cs#L469" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Rect">Rect</a>  
Normalized RectEmpty rect will be return when Rect contains invalid values. Like NaN.

## See Also


#### Reference
<a href="T_Avalonia_Rect">Rect Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
