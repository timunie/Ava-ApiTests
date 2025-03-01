import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CollectionChanged Event


Occurs when the collection has changed to indicate the reason for the change and which items changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event NotifyCollectionChangedEventHandler CollectionChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event CollectionChanged As NotifyCollectionChangedEventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CollectionChanged : IEvent<NotifyCollectionChangedEventHandler,
    NotifyCollectionChangedEventArgs>
override CollectionChanged : IEvent<NotifyCollectionChangedEventHandler,
    NotifyCollectionChangedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventHandler</a>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged.collectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged.CollectionChanged</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
