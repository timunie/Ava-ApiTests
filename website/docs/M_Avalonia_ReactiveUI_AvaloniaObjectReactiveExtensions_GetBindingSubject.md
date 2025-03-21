# GetBindingSubject(AvaloniaObject, AvaloniaProperty, BindingPriority) Method


Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ISubject<BindingValue<Object>> GetBindingSubject(
	this AvaloniaObject o,
	AvaloniaProperty property,
	BindingPriority priority = BindingPriority.LocalValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetBindingSubject ( 
	o As AvaloniaObject,
	property As AvaloniaProperty,
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As ISubject(Of BindingValue(Of Object))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetBindingSubject : 
        o : AvaloniaObject * 
        property : AvaloniaProperty * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> ISubject<BindingValue<Object>> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AvaloniaObjectReactiveExtensions.cs#L71" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd>The priority with which binding values are written to the object.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.reactive.subjects.isubject-1" target="_blank" rel="noopener noreferrer">ISubject</a>(<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>))  
An <a href="https://learn.microsoft.com/dotnet/api/system.reactive.subjects.isubject-1" target="_blank" rel="noopener noreferrer">ISubject</a> which can be used for two-way binding to/from the property.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions Class</a>  
<a href="Overload_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject">GetBindingSubject Overload</a>  
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  

