# GetActivationForView Method


Returns activation observable for activatable Avalonia view.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IObservable<bool> GetActivationForView(
	IActivatableView view
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetActivationForView ( 
	view As IActivatableView
) As IObservable(Of Boolean)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetActivationForView : 
        view : IActivatableView -> IObservable<bool> 
override GetActivationForView : 
        view : IActivatableView -> IObservable<bool> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AvaloniaActivationForViewFetcher.cs#L28" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  IActivatableView</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

#### Implements
IActivationForViewFetcher.GetActivationForView(IActivatableView)  


## See Also


#### Reference
<a href="T_Avalonia_ReactiveUI_AvaloniaActivationForViewFetcher">AvaloniaActivationForViewFetcher Class</a>  
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  

