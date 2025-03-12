# GetPreviousArrangeBounds Method


Gets the control bounds used in the previous layout arrange pass.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Rect? GetPreviousArrangeBounds(
	Layoutable control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetPreviousArrangeBounds ( 
	control As Layoutable
) As Rect?
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetPreviousArrangeBounds : 
        control : Layoutable -> Nullable<Rect> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutInformation.cs#L25" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a></dt><dd>The control.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Rect">Rect</a>)  
Previous control arrange bounds, if any.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutInformation">LayoutInformation Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

