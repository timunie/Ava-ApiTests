# AvaloniaPropertyChangedEventArgs&lt;T&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaPropertyChangedEventArgs(
	AvaloniaObject sender,
	AvaloniaProperty<T> property,
	Optional<T> oldValue,
	BindingValue<T> newValue,
	BindingPriority priority
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	sender As AvaloniaObject,
	property As AvaloniaProperty(Of T),
	oldValue As Optional(Of T),
	newValue As BindingValue(Of T),
	priority As BindingPriority
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        sender : AvaloniaObject * 
        property : AvaloniaProperty<'T> * 
        oldValue : Optional<'T> * 
        newValue : BindingValue<'T> * 
        priority : BindingPriority -> AvaloniaPropertyChangedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyChangedEventArgs%601.cs#L24" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object that the property changed on.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">T</a>)</dt><dd>The property that changed.</dd><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">T</a>)</dt><dd>The old value of the property.</dd><dt>  <a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">T</a>)</dt><dd>The new value of the property.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a></dt><dd>The priority of the binding that produced the value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs(T) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

