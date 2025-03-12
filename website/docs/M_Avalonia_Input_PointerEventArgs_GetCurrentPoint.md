# GetCurrentPoint Method


Returns the PointerPoint associated with the current event



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PointerPoint GetCurrentPoint(
	Visual? relativeTo
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetCurrentPoint ( 
	relativeTo As Visual
) As PointerPoint
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetCurrentPoint : 
        relativeTo : Visual -> PointerPoint 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerEventArgs.cs#L113" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual whose coordinate system to use. Pass null for toplevel coordinate system</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_PointerPoint">PointerPoint</a>  


## See Also


#### Reference
<a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

