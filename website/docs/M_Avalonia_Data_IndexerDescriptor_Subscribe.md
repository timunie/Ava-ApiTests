# Subscribe Method


Notifies the provider that an observer is to receive notifications.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IDisposable Subscribe(
	IObserver<Object?> observer
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Subscribe ( 
	observer As IObserver(Of Object)
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Subscribe : 
        observer : IObserver<Object> -> IDisposable 
override Subscribe : 
        observer : IObserver<Object> -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/IndexerDescriptor.cs#L108" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobserver-1" target="_blank" rel="noopener noreferrer">IObserver</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The object that is to receive notifications.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
A reference to an interface that allows observers to stop receiving notifications before the provider has finished sending them.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1.subscribe" target="_blank" rel="noopener noreferrer">IObservable(T).Subscribe(IObserver(T))</a>  


## See Also


#### Reference
<a href="T_Avalonia_Data_IndexerDescriptor">IndexerDescriptor Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

