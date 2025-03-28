# SetCurrentValue(AvaloniaProperty, Object) Method


Sets the value of a dependency property without changing its value source.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void SetCurrentValue(
	AvaloniaProperty property,
	Object? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub SetCurrentValue ( 
	property As AvaloniaProperty,
	value As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SetCurrentValue : 
        property : AvaloniaProperty * 
        value : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L384" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value.</dd></dl>

## Remarks
This method is used by a component that programmatically sets the value of one of its own properties without disabling an application's declared use of the property. The method changes the effective value of the property, but existing data bindings and styles will continue to work. The new value will have the property's current <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>, even if that priority is <a href="T_Avalonia_Data_BindingPriority">Unset</a> or <a href="T_Avalonia_Data_BindingPriority">Inherited</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

