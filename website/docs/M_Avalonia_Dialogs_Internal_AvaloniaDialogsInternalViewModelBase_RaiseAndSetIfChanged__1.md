# RaiseAndSetIfChanged&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Dialogs_Internal">Avalonia.Dialogs.Internal</a>  
**Assembly:** Avalonia.Dialogs (in Avalonia.Dialogs.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected bool RaiseAndSetIfChanged<T>(
	ref T field,
	T value,
	string? propertyName = null
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function RaiseAndSetIfChanged(Of T) ( 
	ByRef field As T,
	value As T,
	Optional propertyName As String = Nothing
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RaiseAndSetIfChanged : 
        field : 'T byref * 
        value : 'T * 
        ?propertyName : string 
(* Defaults:
        let _propertyName = defaultArg propertyName null
*)
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Dialogs/Internal/AvaloniaDialogsInternalViewModelBase.cs#L14" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  T</dt><dd> </dd><dt>  T</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Dialogs_Internal_AvaloniaDialogsInternalViewModelBase">AvaloniaDialogsInternalViewModelBase Class</a>  
<a href="N_Avalonia_Dialogs_Internal">Avalonia.Dialogs.Internal Namespace</a>  

