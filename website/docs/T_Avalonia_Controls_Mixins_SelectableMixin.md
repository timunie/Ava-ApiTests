# SelectableMixin Class


Adds selectable functionality to control classes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Mixins">Avalonia.Controls.Mixins</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class SelectableMixin
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class SelectableMixin
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type SelectableMixin = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Mixins/SelectableMixin.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  SelectableMixin</td></tr>
</table>



## Remarks

The SelectableMixin adds behavior to a control which can be selected. It adds the following behavior:
<ul>Raises an <a href="F_Avalonia_Controls_Primitives_SelectingItemsControl_IsSelectedChangedEvent">IsSelectedChangedEvent</a> when the value if the IsSelected property changes.Adds a 'selected' class to selected controls.Requests that the control is scrolled into view when focused.</ul>
Mixins apply themselves to classes and not instances, and as such should be created in a static constructor.


## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Mixins_SelectableMixin_Attach__1">Attach(TControl)(AvaloniaProperty(Boolean))</a></td>
<td>Initializes a new instance of the SelectableMixin class.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Mixins">Avalonia.Controls.Mixins Namespace</a>  

