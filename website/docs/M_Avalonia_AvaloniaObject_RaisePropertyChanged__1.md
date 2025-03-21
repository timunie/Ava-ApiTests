# RaisePropertyChanged&lt;T&gt; Method


Raises the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event for a direct property.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected void RaisePropertyChanged<T>(
	DirectPropertyBase<T> property,
	T oldValue,
	T newValue
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub RaisePropertyChanged(Of T) ( 
	property As DirectPropertyBase(Of T),
	oldValue As T,
	newValue As T
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RaisePropertyChanged : 
        property : DirectPropertyBase<'T> * 
        oldValue : 'T * 
        newValue : 'T -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L749" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase</a>(T)</dt><dd>The property that has changed.</dd><dt>  T</dt><dd>The old property value.</dd><dt>  T</dt><dd>The new property value.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

