# GetPosition Method


Gets the pointer position relative to a control.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Point GetPosition(
	Visual? relativeTo
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetPosition ( 
	relativeTo As Visual
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetPosition : 
        relativeTo : Visual -> Point 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerEventArgs.cs#L105" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual whose coordinate system to use. Pass null for toplevel coordinate system</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
The pointer position in the control's coordinates.

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
