# GetPreviousMeasureConstraint Method


Gets the available size constraint passed in the previous layout pass.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Size? GetPreviousMeasureConstraint(
	Layoutable control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetPreviousMeasureConstraint ( 
	control As Layoutable
) As Size?
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetPreviousMeasureConstraint : 
        control : Layoutable -> Nullable<Size> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutInformation.cs#L15" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a></dt><dd>The control.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Size">Size</a>)  
Previous control measure constraint, if any.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutInformation">LayoutInformation Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

