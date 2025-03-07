# AutoDataTemplateBindingHook Class


AutoDataTemplateBindingHook is a binding hook that checks ItemsControls that don't have DataTemplates, and assigns a default DataTemplate that loads the View associated with each ViewModel.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AutoDataTemplateBindingHook : IPropertyBindingHook
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AutoDataTemplateBindingHook
	Implements IPropertyBindingHook
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AutoDataTemplateBindingHook = 
    class
        interface IPropertyBindingHook
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AutoDataTemplateBindingHook.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AutoDataTemplateBindingHook</td></tr>
<tr><td><strong>Implements</strong></td><td>IPropertyBindingHook</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AutoDataTemplateBindingHook__ctor">AutoDataTemplateBindingHook()</a></td>
<td>Initializes a new instance of the AutoDataTemplateBindingHook class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AutoDataTemplateBindingHook_ExecuteHook">ExecuteHook(Object, Object, Func(IObservedChange(Object, Object)[]), Func(IObservedChange(Object, Object)[]), BindingDirection)</a></td>
<td>Called when any binding is set up.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  
