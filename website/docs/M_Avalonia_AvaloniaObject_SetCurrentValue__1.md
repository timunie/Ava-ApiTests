# SetCurrentValue&lt;T&gt;(StyledProperty&lt;T&gt;, T) Method


Sets the value of a dependency property without changing its value source.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void SetCurrentValue<T>(
	StyledProperty<T> property,
	T value
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub SetCurrentValue(Of T) ( 
	property As StyledProperty(Of T),
	value As T
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SetCurrentValue : 
        property : StyledProperty<'T> * 
        value : 'T -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L404" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(T)</dt><dd>The property.</dd><dt>  T</dt><dd>The value.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the property.</dd></dl>This method is used by a component that programmatically sets the value of one of its own properties without disabling an application's declared use of the property. The method changes the effective value of the property, but existing data bindings and styles will continue to work. The new value will have the property's current <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>, even if that priority is <a href="T_Avalonia_Data_BindingPriority">Unset</a> or <a href="T_Avalonia_Data_BindingPriority">Inherited</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

