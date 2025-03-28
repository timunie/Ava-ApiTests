# GetVisualParent Method


Gets the common visual parent of the two control.



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static Visual GetVisualParent(
	Visual? from,
	Visual? to
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Function GetVisualParent ( 
	from As Visual,
	to As Visual
) As Visual
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetVisualParent : 
        from : Visual * 
        to : Visual -> Visual 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/PageSlide.cs#L160" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The from control.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The to control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Visual">Visual</a>  
The common parent.

## Remarks
Any one of the parameters may be null, but not both.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>The two controls do not share a common parent.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Animation_PageSlide">PageSlide Class</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  

