# GetIntermediatePoints Method


Returns the PointerPoint associated with the current event



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<PointerPoint> GetIntermediatePoints(
	Visual? relativeTo
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetIntermediatePoints ( 
	relativeTo As Visual
) As IReadOnlyList(Of PointerPoint)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetIntermediatePoints : 
        relativeTo : Visual -> IReadOnlyList<PointerPoint> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerEventArgs.cs#L121" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual which coordinate system to use. Pass null for toplevel coordinate system</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Input_PointerPoint">PointerPoint</a>)  


## See Also


#### Reference
<a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
