# GetIsScrollChainingEnabled Method


Gets the value of the IsScrollChainingEnabled attached property.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool GetIsScrollChainingEnabled(
	Control control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetIsScrollChainingEnabled ( 
	control As Control
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetIsScrollChainingEnabled : 
        control : Control -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ScrollViewer.cs#L620" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control to read the value from.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
The value of the property.

## Remarks
After a user hits a scroll limit on an element that has been nested within another scrollable element, you can specify whether that parent element should continue the scrolling operation begun in its child element. This is called scroll chaining.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

