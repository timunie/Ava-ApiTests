# ExecuteHook Method


Called when any binding is set up.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool ExecuteHook(
	Object? source,
	Object target,
	Func<IObservedChange<Object, Object>[]> getCurrentViewModelProperties,
	Func<IObservedChange<Object, Object>[]> getCurrentViewProperties,
	BindingDirection direction
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ExecuteHook ( 
	source As Object,
	target As Object,
	getCurrentViewModelProperties As Func(Of IObservedChange(Of Object, Object)()),
	getCurrentViewProperties As Func(Of IObservedChange(Of Object, Object)()),
	direction As BindingDirection
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ExecuteHook : 
        source : Object * 
        target : Object * 
        getCurrentViewModelProperties : Func<IObservedChange<Object, Object>[]> * 
        getCurrentViewProperties : Func<IObservedChange<Object, Object>[]> * 
        direction : BindingDirection -> bool 
override ExecuteHook : 
        source : Object * 
        target : Object * 
        getCurrentViewModelProperties : Func<IObservedChange<Object, Object>[]> * 
        getCurrentViewProperties : Func<IObservedChange<Object, Object>[]> * 
        direction : BindingDirection -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AutoDataTemplateBindingHook.cs#L36" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The source ViewModel.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The target View (not the actual control).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(IObservedChange(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)[])</dt><dd>Get current view model properties.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(IObservedChange(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)[])</dt><dd>Get current view properties.</dd><dt>  BindingDirection</dt><dd>The Binding direction.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
If false, the binding is cancelled.

#### Implements
IPropertyBindingHook.ExecuteHook(Object, Object, Func(IObservedChange(Object, Object)[]), Func(IObservedChange(Object, Object)[]), BindingDirection)  


## See Also


#### Reference
<a href="T_Avalonia_ReactiveUI_AutoDataTemplateBindingHook">AutoDataTemplateBindingHook Class</a>  
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  
