import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TryGetPosition Method


Gets the x- and y-coordinates of the pointer position, optionally evaluated against a coordinate origin of a supplied <a href="T_Avalonia_Controls_Control">Control</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetPosition(
	Control? relativeTo,
	out Point? point
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetPosition ( 
	relativeTo As Control,
	<OutAttribute> ByRef point As Point
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetPosition : 
        relativeTo : Control * 
        point : Point byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ContextRequestedEventArgs.cs#L52" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>Any <a href="T_Avalonia_Controls_Control">Control</a>-derived object that is connected to the same object tree. To specify the object relative to the overall coordinate system, use a relativeTo value of null.</dd><dt>  Point</dt><dd>A Point that represents the current x- and y-coordinates of the mouse pointer position. If null was passed as relativeTo, this coordinate is for the overall window. If a relativeTo value other than null was passed, this coordinate is relative to the object referenced by relativeTo.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the context request was initiated by a pointer device; otherwise, false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ContextRequestedEventArgs">ContextRequestedEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
